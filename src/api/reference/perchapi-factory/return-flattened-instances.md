---
title: return_flattened_instances()
nav_groups:
  - primary
nav_sort: 13
---

The method takes an array of rows and returns an array of `PerchAPI_Base` objects data.

## Parameters

| Type  | Description |
| ----- | ----------- |
| Array | Rows        |

## Return

The method returns an array. If the given rows are empty, it returns `false`.

## Usage

```php
$API = new PerchAPI(1.0, 'company_app');
$Articles = new CompanyApp_Articles($API);
$DB = $API->get('DB');

$rows = $DB->get_rows("SELECT * FROM " . $table . " WHERE status=published");
$articles = $Articles->return_flattened_instances($rows);
```