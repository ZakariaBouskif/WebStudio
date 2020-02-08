$(function(){


    // ACCORDION DES ELEMENTS
    const headdings = $("#accordion h2");
    const elements = $("#accordion .display-elements");

    const createHeader = $("#create-header");
    const createHeaderImage = $("#create-header-img");
    const createMain = $("#create-main");
    const createFooter = $("#create-footer");
    const ajouterNavElement = $("#btn-add-nav");
    const ajouterTextImgHeader = $("#add-text-img-header");
    const ajouterTextMain = $("#add-text-main");
    
    //par default
    ajouterNavElement.attr("disabled" , "true");
    ajouterTextImgHeader.attr("disabled" , "true");

    const displayClient = $("#display");
    const anyClientElement = $("#display");
    const proprietes = $("#proprietes");

    // Tool Elements
    const color = $("#app-color");
    const bgColor = $("#app-bg-color");
    const font = $("#app-font");
    const size = $("#app-font-size");
    const align = $("#app-align-text");



    elements.not(":first").hide();



    const get = $("selectEl");


    get.on("click" , function(){
        console.log(window.getSelection().deleteFromDocument());
    });








    //#region Event Click headding elements
    headdings.on('click' , function(){
        var t = $(this);
        var tPara = t.next();

        if(tPara.is(":visible"))
            return;

        elements.slideUp("normal")
        tPara.slideDown("normal");
    });
    //#endregion

    //#region Create header elements
    createHeader.on('click' , function(){

        var text = $("#text-header").val();


        var header = $("<ul />" , {
            "class" : "client-header"
        });
        

        var a = $("<a />" , {
            "text" : "Home",
            "href" : "#"
        });


        var li = $("<li />");
        li.append(a);
        header.append(li);

        displayClient.append(header);
        ajouterNavElement.removeAttr("disabled");

    });

    //#endregion

    //#region  click display elements
    anyClientElement.on('click' , 'ul , div , img , p , input , a', function(){
        t = $(this);
        console.log(t);
        var textProprites = t.css(["width" , "height" , "color" , "background-color" ,"font-family"]);
        
        proprietes.html("Les Proprietes de l'element selectioner est : ");
        var text ="";
        
        $.each(textProprites , function(prop , value){
            console.log(prop + " : " + value);
            text +=  prop + " : " + value +"<br>";     
        });
        text+= "class : "+t.attr("class") +" <br> Id :  "+ t.attr("id")+ "<br>"; 
        text += "<br><br><br> <input type='button' value='Modifier Style' id='modifierStyle' >";
        proprietes.html(text);

        console.log(textProprites);

        const modifierStyle = $("#modifierStyle");

        modifierStyle.on("click" , function(){
            t.css({
                "color" : color.val(),
                "background-color" : bgColor.val(),
                "font-family" : font.val(),
                "font-size" : size.val()+"px",
                "text-align" : align.val()
            });
            
        });

    });

    //#endregion

    //#region Create main element
    createMain.on('click' , function(){

        var main = $("<div />" , {
            text : "Ecrere Votre Propre Text Via La Zone de Text au desseu de la creation de main"
        });
        main.css({
            "font-family" : font.val(),
            "font-size" : size.val()+"pt",
            "background" : bgColor.val(),
            "width" : "100%",
            "height" : "auto"
        });


        displayClient.append(main);
    });

//#endregion

    //#region Create footer element
    createFooter.on('click' , function(){
        var date = new Date();

        var nom = prompt("Entrez votre nom :");
        var footer = $("<div />" ,{
            "html" : "Copyright  &copy; "+nom +" " + date.getFullYear('y')
        });


        footer.css({
            "width" : "100%",
            "height" : "20px",
            "background-color" : "black",
            "font-size" : "14pt",
            "color" : "white"
        });

        displayClient.append(footer);


    });


    //#endregion

    //#region Create header image

    createHeaderImage.on('click' , function(){

        var path = prompt("Entrez l'url d'image : ");

        if(path == "")
            return;

        var div = $("<div />");
        div.attr("id" ,"div-image-header");
        div.css({
            "background-image" : "url('"+path+"')",
            "width" : "100%",
            "height" : "300px",
            "background-position" : "center center",
            "margin-top" : "0"
        });
        // var headerImg = $("<img src ="+path+ " />");

        // headerImg.css({
        //     "width" : "100%",
        //     "height" : "300px"
        // });

        //div.append(headerImg);


        displayClient.append(div);
        ajouterTextImgHeader.removeAttr("disabled");

        console.log(displayClient.html());

    });


    //#endregion

    //#region Ajouter Nav Element


ajouterNavElement.on('click' , function(){

    var navElement = $("#nav-element");
   
    var a = $("<a />" , {
        "text" : navElement.val(),
        "href" : "#"
    });


    var li = $("<li />");
    li.append(a);


    if(displayClient.has("ul"))
        $(".client-header").append(li);
    else
        alert("Ajouter un Header");


});



//#endregion


    //#region Ajouter Text au header image

ajouterTextImgHeader.on("click" , function(){

        var text = $("#text-img-header").val();
        var imgHeader = $("#div-image-header");

        var p = $("<p />" , {
            "text" : text
        });

        p.css({
            "color" : color.val(),
            "background-color" : bgColor.val(),
            "font-family" : font.val(),
            "font-size" : size.val()+"px",
            "text-align" : align.val()
        });
    

        imgHeader.prepend(p);
        console.log(text);



});

//#endregion


//#region Ajouter Text Main
ajouterTextMain.on("click" , function(){
    var text = $("#text-main").val();
    var main = $("#main");
    main.append(text);
});


//#endregion


   
});