# OData service - How to use stored procedures


<p>This example illustrates how to use stored procedures with OData. You can learn how to map an entity to a stored procedure in this blog: <a href="http://msdn.microsoft.com/en-us/data/gg699321.aspx"><u>Stored Procedures in the Entity Framework</u></a>. This blog describes how to expose a stored procedure in the OData service: <a href="http://sim4all.com/blogging/?p=161"><u>oData and Stored Procedures aka Service Operations</u></a>. We suggest that you use the <a href="http://js.devexpress.com/Documentation/Guide/VS_Integration/Project_Templates/?version=15_2#WCF_OData_Service"><u>DevExtreme WCF OData Service project template</u></a> when creating the OData service.</p>
<br>
<p>To execute a web method of the OData service, use the ODataStore.get method. For example:</p>


```js
store.get("TestOperation", { param1: 123, param2: "abc" }).done(...);
```


<p> </p>
<br>
<p>Here is a good blog describing how to configure the method so it supports the JSON format: <a href="http://blogs.msdn.com/b/madenwal/archive/2011/03/22/creating-a-net-wcf-4-0-json-service.aspx"><u>Creating a .NET WCF 4.0 JSON Service</u></a>.</p>

<br/>


