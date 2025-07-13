# You have just "_brew install mysql_" database

### We've installed your MySQL database without a root password. To secure it run:
```
mysql_secure_installation
```

### MySQL is configured to only allow connections from localhost by default

### ### To connect run:
```
mysql -u root
```

### In order to have mysql@8.0 first in your PATH, run:
```
echo 'export PATH="/opt/homebrew/opt/mysql@8.0/bin:$PATH"' >> ~/.zshrc
```

### For compilers to find mysql@8.0 you may need to set:
```
export LDFLAGS="-L/opt/homebrew/opt/mysql@8.0/lib"
export CPPFLAGS="-I/opt/homebrew/opt/mysql@8.0/include"
```

### For pkg-config to find mysql@8.0 you may need to set:
```
export PKG_CONFIG_PATH="/opt/homebrew/opt/mysql@8.0/lib/pkgconfig"
```

### To start mysql@8.0 now and restart at login:
```
brew services start mysql@8.0
```

### Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/mysql@8.0/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql