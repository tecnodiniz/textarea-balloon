//Dinamica do 'Balão'
$("#ballon-text").each(function () { 
    //Modifica o atributo para crescer de acordo com a rolatem da textarea
    //O método é ativo no input, ou seja, quando você insere algo dentre dele.
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");  
    }).on("input", function () {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    });