---
id: installation
title: "Installation"
sidebar_label: "Installation"
sidebar_position: 4
description: "Installation documentation."
displayed_sidebar: dataServiceSidebar
---
# Installation

### **1. Introduction**

This document will guide you on how to install Data Service on Linux (Ubuntu) server.

### **2. System Requirements**

* Ubuntu v18.04 or later
* Java Development Kit 11.x.x
* MySQL v8.0.32
* 4GB RAM or higher
* 50GB SSD (prefer)/HDD
* 2 CPU or more

### **3. Database Setup**

System administrator must add this database credential to your system.

username = root / password = sis@12345

There are two database schemas needed to run on your system: akabot\_dataservice, akabot\_userdata. Data Service web service will automatically create these schemas if they do not exist. You can manually create them if the automation process failed by following guidelines

CREATE SCHEMA `akabot\_dataservice` DEFAULT CHARACTER SET utf8 COLLATE utf8\_bin ;  
CREATE SCHEMA `akabot\_userdata` DEFAULT CHARACTER SET utf8 COLLATE utf8\_bin ;

### **4. Installation Process**

* Download all files in latest releases version [here](https://fptsoftware362-my.sharepoint.com/personal/tuantk1_fpt_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftuantk1%5Ffpt%5Fcom%2FDocuments%2FakaBot%2Fdata%2Dservice&ga=1)

![image-20230630133051-1.png](/static/img/2557e5_image-20230630133051-1.png)

* Use MobaXterm to ssh to your remote server
* Upload the above files to your home directory. For example, ~/dataservice
* Change directory: cd ~/dataservice
* Set execute permission: chmod +x setup.sh
* Set execute permission: chmod +x setup.sh

After running the above commands, the script will copy files to directory “/opt/dataservice/” and register a service called “akabotdata.service”.

To check if the installation is successful, visit this URL in your browser: http://localhost:8084/#/login. Enter the credential: admin/admin. You should see the page like this.

![image-20230630133109-2.png](/static/img/f4ff52_image-20230630133109-2.png)

### **5. User Account**

The setup.sh script will automatically create user “dataservice” with password “akaBot@12345” in your system

### **6. Troubleshooting**

* The webservice store log files in this directory: /opt/dataservice/logs/\*
* To check if the webservice is running or stopped, run this command: *sudo systemctl status akabotdata.service*

![image-20230630133128-3.png](/static/img/e26578_image-20230630133128-3.png)

* To start the service: sudo systemctl start akabotdata.service
* To stop the service: sudo systemctl stop akabotdata.service
* If any goes wrong in installation process, take a screenshot of error message and send to email: [[support@akabot.com]](/cdn-cgi/l/email-protection)
