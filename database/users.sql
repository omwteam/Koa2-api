CREATE TABLE   IF NOT EXISTS  `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # 用户ID
  `email` varchar(255) NOT NULL,    # 邮箱地址
  `password` varchar(255) NOT NULL, # 密码
  `nickname` varchar(255) DEFAULT NULL,     # 用户昵称
  `detail_info` longtext DEFAULT NULL,  # 详细信息
  `created_at` int(11) DEFAULT NULL,   # 创建时间
  `modified_at` int(11) DEFAULT NULL, # 修改时间
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;