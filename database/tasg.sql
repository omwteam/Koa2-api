CREATE TABLE   IF NOT EXISTS  `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # 标签ID
  `tag_name` varchar(255) NOT NULL,    # 标签名称
  `tag_desc` varchar(255) DEFAULT '', # 标签描述
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;