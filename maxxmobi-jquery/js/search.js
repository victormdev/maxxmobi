$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "http://69.162.111.190/smscontrol/public/api/list1",
        dataType: "json",

        success: function (data){

            $.each(data, function(index,item){
                var row = "<tr>"+
                            "<td>" + item.nome + "</td>" +
                            "<td>" + item.partido + "</td>" +
                            "<td>" + item.numero + "</td>" +
                            "</tr>";
                $("#table").append(row);
            });
        },
    });
});