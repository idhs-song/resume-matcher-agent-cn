import sqlite3
import os

# 连接到数据库
conn = sqlite3.connect('app.db')
cursor = conn.cursor()

# 获取所有表名
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("数据库中的所有表:")
for table in tables:
    print(f"  - {table[0]}")

# 检查每个表的行数
print("\n各表的行数:")
for table in tables:
    try:
        cursor.execute(f"SELECT COUNT(*) FROM {table[0]};")
        count = cursor.fetchone()[0]
        print(f"  - {table[0]}: {count} 行")
    except Exception as e:
        print(f"  - {table[0]}: 无法查询行数 ({e})")

# 检查job_resume表的内容
print("\njob_resume表的内容:")
try:
    cursor.execute("SELECT * FROM job_resume;")
    rows = cursor.fetchall()
    if rows:
        print(f"  找到 {len(rows)} 行数据:")
        for row in rows:
            print(f"    {row}")
    else:
        print("  表为空")
except Exception as e:
    print(f"  无法查询表内容: {e}")

# 关闭连接
conn.close()