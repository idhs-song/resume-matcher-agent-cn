import time
import logging
import sys
import os
from logging.handlers import RotatingFileHandler
import shutil

class WindowsSafeRotatingFileHandler(RotatingFileHandler):
    """
    一个适用于Windows环境的安全轮转日志处理器
    解决Windows下日志文件被锁定导致轮转失败的问题
    """
    
    def __init__(self, *args, **kwargs):
        # 添加尝试次数参数，默认为3次
        self.max_attempts = kwargs.pop('max_attempts', 3)
        self.attempt_delay = kwargs.pop('attempt_delay', 0.5)  # 每次尝试间隔0.5秒
        super().__init__(*args, **kwargs)
    
    def doRollover(self):
        """
        重写轮转方法，添加错误处理和重试机制
        """
        if self.stream:
            self.stream.close()
            self.stream = None
            
        attempt = 0
        success = False
        
        while attempt < self.max_attempts:
            try:
                # 尝试进行正常的轮转
                if os.path.exists(self.baseFilename + '.1'):
                    # 如果备份文件已存在，先删除它（使用shutil.move来处理可能的文件锁定）
                    for s in range(self.backupCount - 1, 0, -1):
                        sfn = self.baseFilename + '.' + str(s)
                        dfn = self.baseFilename + '.' + str(s + 1)
                        if os.path.exists(sfn):
                            try:
                                if os.path.exists(dfn):
                                    os.remove(dfn)
                                shutil.move(sfn, dfn)
                            except (PermissionError, OSError):
                                # 如果移动失败，继续处理下一个文件
                                pass
                
                # 重命名当前日志文件
                if os.path.exists(self.baseFilename):
                    shutil.move(self.baseFilename, self.baseFilename + '.1')
                
                # 成功完成轮转
                success = True
                break
                
            except PermissionError as e:
                attempt += 1
                if attempt >= self.max_attempts:
                    # 达到最大尝试次数，记录错误但不抛出异常
                    sys.stderr.write(f"Failed to rotate log file after {self.max_attempts} attempts: {e}\n")
                else:
                    # 等待一段时间后重试
                    time.sleep(self.attempt_delay)
                    
        # 无论轮转是否成功，都重新打开日志文件继续写入
        if not self.delay:
            self.mode = 'w'
            try:
                self.stream = self._open()
            except Exception as e:
                # 如果打开文件失败，记录错误
                sys.stderr.write(f"Failed to open log file for writing: {e}\n")