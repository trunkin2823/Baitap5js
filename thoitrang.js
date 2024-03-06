var man =[
    {
        id:1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        Image:"https://bizweb.dktcdn.net/100/438/408/products/qsm3026-den-2.png?v=1688723478403"
    },
    {
        id:2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        Image:"https://down-vn.img.susercontent.com/file/ba01cfe8b856b213ef78b285ae3b257c"
    },
    {
        id:3,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        Image:"https://down-vn.img.susercontent.com/file/sg-11134201-23020-1um8fry21inv76"
    },
    {
        id:4,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        Image:"https://down-vn.img.susercontent.com/file/sg-11134201-23020-5lk48ty21invfb"
    },
];
var woment = [
    {
        id:1,
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "250.000",
        Image:"https://pos.nvncdn.com/312d68-57499/art/artCT/20210120_dy4cQVwT8PDqBQsfEhSyShCt.jpg"
    },
    {
        id:2,
        name: "Áo thun phối váy ngắn",
        code: "TC1025011BA",
        price: "350.000",
        Image:"https://i-ngoisao.vnecdn.net/2018/11/20/mix-match-2-9366-1542684349.jpg"
    },
    {
        id:3,
        name: "Áo Khoác",
        code: "TC1025011BA",
        price: "300.000",
        Image:"https://zizoou.com/cdn/shop/files/Ao-khoac-jacket-bomber-hoodies-form-rong-oversize-Ao-khoac-den-7-1_Similar_1_Extras-ZiZoou-Store_7d10f123-e3e2-4762-8f21-cd3f50178abb.jpg?v=1687077300"
    },
    {
        id:4,
        name: "Áo thun",
        code: "TC1025011BA",
        price: "150.000",
        Image:"https://bizweb.dktcdn.net/100/386/478/products/d68ee343-7172-44f2-ba72-e03277d4056c.jpg?v=1648116549447"
    },
];
function listProducts(){
    for (let i = 0; i < man.length-1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+ man[i].image+'" class="card-img-top" style= "height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';    
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("man").innerHTML   += demo;           
    }
    for (let i = 0; i < women.length-1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+ women[i].image+'" class="card-img-top" style= "height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+women[i].name+'</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';    
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML   += demo;           
    }
}
listProducts();