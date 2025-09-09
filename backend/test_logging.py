import os
import sys
import logging
from app.core.config import setup_logging, settings

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

# 创建一个测试logger
logger = logging.getLogger("test_logger")

# 记录不同级别的日志
logger.debug("This is a debug test message")
logger.info("This is an info test message")
logger.warning("This is a warning test message")
logger.error("This is an error test message")

# 直接尝试写入日志文件进行测试
log_file = os.path.join(settings.LOG_DIR, "resume_matcher.log")
try:
    with open(log_file, 'a') as f:
        f.write("[DIRECT TEST] This is a direct test message\n")
    print(f"Directly wrote to log file: {log_file}")
    print(f"Log file exists after direct write: {os.path.exists(log_file)}")
except Exception as e:
    print(f"Failed to directly write to log file: {e}", file=sys.stderr)

print("Log test completed. Check the logs directory for resume_matcher.log")