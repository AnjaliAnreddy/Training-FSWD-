<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
        }
        body{
            font-family: sans-serif;
            width: 100%;
            height: 100vh;
            background-color: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container{
            width: 320px;
            height: 420px;
            box-shadow: 0px 0px 10px 0px black;
            padding: 15px;
            display: flex;
            flex-direction: column;
        }
        .container h1{
            flex-basis: 15%;
            font-size: 28px;
            color: green;
            display: flex;
            align-items: center;
            justify-content: center;
           
        }
        .imgBlock{
            flex-basis: 60%;
        }
        .imgBlock img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .content{
            flex-basis: 25%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
    .content > #inpValue{
        width: 100%;
        height: 42px;
        padding: 0px 10px;
    }
     .content > button{
        width: 100%;
        margin-top: 2px;
        padding: 7px;
        background-color: green;
        color: #fff;
        border: none;
     }
    </style>
</head>
<body>
    <div class="container">
        <h1>QR Code Generator</h1>
        <div class="imgBlock">
            <img src="" alt="">
        </div>
        <div class="content">
            <input type="text" placeholder="enter value" id="inpValue">
            <button>Generate QR Code</button>
        </div>
    </div>

    <script>
        let image = document.querySelector("img");
        let contentValue = document.querySelector("#inpValue");
        let btn = document.querySelector("button");
        btn.addEventListener("click",()=>{
            let linkQR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
            let data = contentValue.value;
            let value = linkQR + data;
            // console.log(value);
            image.src = value;
        })
    </script>
</body>
</html>

<!-- https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MRU --></head>