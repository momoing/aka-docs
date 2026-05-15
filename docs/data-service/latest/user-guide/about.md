---
id: about
title: "About"
sidebar_label: "About"
sidebar_position: 1
description: "About Data Service documentation."
displayed_sidebar: dataServiceSidebar
---
# About Data Service 

Data Service is a persistent data storage service that brings powerful no-code data modeling and storage capabilities to your Robotic Process Automation (RPA) projects.

Data Service allows you to securely store and manage your business data within akaBot. Here's what you can do with it:

1. Gather data: Run automated processes to collect data from different systems and prepare it for further processing in other systems.
2. Utilize data: Use the collected data for complex business processes that involve transferring data between automated and manual tasks.
3. Integration with Studio and Agent: Seamlessly incorporate Data Service into your automation workflows using features like:

* Advanced data types: Work with structured data in a relational format, allowing you to organize and manipulate it more effectively.
* Enhanced security: Ensure the safety and privacy of your data by leveraging built-in security features.
* Quick provisioning and deployment: Set up and deploy Data Service rapidly, making it instantly available for use in your automation projects.

## **II. Use Cases**

Below is a list of some common use cases for the Data Service:

**1. Capturing data about employee needs**

Description:  You need to create a new process for capturing data about employees needs (i.e. desks, chairs, webcams, etc.).

Problem: The data can be extensive and must be stored before creating requests in the procurement system.

Solution: Instead of using a database, a file share, or cloud storages, you can store them in Data Service.

**2. Monthly financial reporting**

Description: Processes for monthly financial reporting get data from multiple systems like bookings, invoices, billings, and payments.

Problem: Both attended and unattended workflows retrieve this data every time they run. This requires all users to have access and connectivity to all the backend systems, which can cause delays and inconsistencies in reporting, as underlying data may change before all your processes are completed.

Solution: You can write one unattended workflow to gather all the required data in Data Service. Then, all your other attended or unattended workflows can work with it. This may also eliminate the need for storing the aggregated critical business data in files on user or robot machines.