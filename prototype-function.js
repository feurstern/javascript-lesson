function SendEmail(){
    this.form ="riokurniawan@sakura-schutzstaffel.com";

}


SendEmail.prototype.sendMessage= function(msg,to){
    console.log(`you send ${msg} to ${to} from ${this.form}`)
}


SendEmail.sendMessage();