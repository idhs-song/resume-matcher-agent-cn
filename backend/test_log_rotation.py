import os
import sys
import time
import logging
from app.core.config import setup_logging, settings

# 确保当前路径在Python路径中
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.append(current_dir)

# 打印日志目录路径进行调试
print(f"Current working directory: {os.getcwd()}")
print(f"Settings LOG_DIR: {settings.LOG_DIR}")
print(f"Absolute path of LOG_DIR: {os.path.abspath(settings.LOG_DIR)}")
print(f"LOG_DIR exists: {os.path.exists(settings.LOG_DIR)}")

# 尝试创建日志目录
try:
    os.makedirs(settings.LOG_DIR, exist_ok=True)
    print(f"Created LOG_DIR: {settings.LOG_DIR}")
except Exception as e:
    print(f"Failed to create LOG_DIR: {e}", file=sys.stderr)

# 设置日志
setup_logging()

# 创建测试logger
logger = logging.getLogger("test_logger")

print("Testing normal logging...")
# 记录不同级别的日志
logger.debug("This is a debug test message")
logger.info("This is an info test message")
logger.warning("This is a warning test message")
logger.error("This is an error test message")

# 测试日志轮转功能
print("Testing log rotation...")

# 创建一个小的临时日志文件来测试轮转
log_file = os.path.join(settings.LOG_DIR, "resume_matcher.log")

# 获取当前日志文件大小
if os.path.exists(log_file):
    initial_size = os.path.getsize(log_file)
    print(f"Initial log file size: {initial_size} bytes")
else:
    print(f"Log file {log_file} does not exist yet")

# 生成大量日志来触发轮转（如果文件已存在）
if os.path.exists(log_file):
    # 写入足够的数据来接近轮转阈值
    chunk_size = 1024 * 1024  # 1MB chunks
    print(f"Writing test data to trigger rotation...")
    
    for i in range(5):  # 写入约5MB数据
        # 创建一个大消息（1MB）
        large_message = "X" * (chunk_size - 100)  # 留出空间给日志格式
        logger.info(f"Large log message chunk {i+1}/{5}: {large_message}")
        # 打印进度
        if os.path.exists(log_file):
            current_size = os.path.getsize(log_file)
            print(f"  Current log size: {current_size/1024/1024:.2f} MB")
        time.sleep(0.1)  # 短暂暂停

    # 检查是否创建了备份文件
    backup_file = log_file + ".1"
    if os.path.exists(backup_file):
        backup_size = os.path.getsize(backup_file)
        print(f"\nSuccessfully created backup file: {backup_file} ({backup_size/1024/1024:.2f} MB)")
    else:
        print(f"\nBackup file {backup_file} was not created (may not have reached rotation threshold)")

# 检查最终日志文件状态
if os.path.exists(log_file):
    final_size = os.path.getsize(log_file)
    print(f"\nFinal log file size: {final_size/1024/1024:.2f} MB")
    print(f"Log file permissions: {oct(os.stat(log_file).st_mode)[-3:]}")
else:
    print(f"\nLog file {log_file} does not exist after testing")

print("\nLog rotation test completed. Check the logs directory for results.")