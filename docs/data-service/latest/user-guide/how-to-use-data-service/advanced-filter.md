---
id: advanced-filter
title: "Advanced Filter"
sidebar_label: "Advanced Filter"
sidebar_position: 1
description: "Advanced Filter documentation."
displayed_sidebar: dataServiceSidebar
---
# Advanced Filter in Data Service 

**Step 1:** Navigate to the **Data** tab of the desired entity in Data Service.

![image-20230630132517-1.png](/static/img/f9122d_image-20230630132517-1.png)

**Step 2**: To apply more filters on your results list, click **Advanced Filter**. The pop-up Advanced Filter will open

![image-20230630132522-2.png](/static/img/bb7b93_image-20230630132522-2.png)

**Step 3**: User Advanced Filter

1. Select the operator:

   * **AND** - to return the entries that match all conditions
   * **OR** - to return the entries that match any of the conditions
2. Define the conditions:

   * **Field** - select the entity field to apply your condition to.
   * **Operator** - select the condition.
   * **Value** - enter the value for your condition. The value must be of the same type as the field type. For example, use strings for **Text** fields, use integers for **Number** fields.
3. Click **+ Condtion** to add as many conditions as you need.

   To remove a conditions, click the corresponding **Delete** icon or if you want to clear all filter, click **Clear all conditions** button
4. Click **Filter** to rerun the search. The page refreshes with the new results.