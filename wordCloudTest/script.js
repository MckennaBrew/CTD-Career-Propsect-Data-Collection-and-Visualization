var data = [
    {x: "Google", value: 1},
    {x: "Microsoft", value: 1},
    {x: "Amazon", value: 1},
    {x: "Apple", value: 1},
    {x: "Samsung", value: 1},
    {x: "At&t", value: 1},
    {x: "Verizon", value: 1},
    {x: "FaceBook", value: 1},
    {x: "Intel", value: 1},
    {x: "Arrow", value: 1},
    {x: "IBM", value: 1},
    {x: "Cisco", value: 1},
    {x: "Oracle", value: 1},
    {x: "Dell", value: 1},
    {x: "HP", value: 1},
    {x: "PayPal", value: 1},
    {x: "Qualcomm", value: 1},
    {x: "Canon", value: 1},
    {x: "Twitter", value: 1},
    {x: "Netflix", value: 1},
    {x: "Salesforce", value: 1},
    {x: "Adobe", value: 1},
    {x: "eBay", value: 1},
    {x: "Nvidia", value: 1}
];

anychart.onDocumentLoad(function () {
    // create an instance of a pie chart
    var chart = anychart.tagCloud(data);
    // set chart title
    chart.title("Companies");
    // configure angles
    chart.angles([0]);
    // set the container element
    chart.container("container");
    // initiate chart display
    chart.draw();
  });
