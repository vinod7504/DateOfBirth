function calculate(){
    let year;
    let month;
    let date;
    let currdate=parseInt(dt.value.slice(8,10),10);
    let currmonth=parseInt(dt.value.slice(5,7),10);
    let curryear=parseInt(dt.value.slice(0,4),10);
    console.log(currdate+" "+currmonth+" "+curryear)
    let birthdate=parseInt(dob.value.slice(8,10),10);
    let birthmonth=parseInt(dob.value.slice(5,7),10);
    let birthyear=parseInt(dob.value.slice(0,4),10);
    console.log(birthdate+" "+birthmonth+" "+birthyear)

    
    if(currdate>=birthdate){
        
        date=currdate-birthdate
    }else{
        date=currdate+new Date(curryear,currmonth-1,0).getDate()-birthdate
        currmonth--;
    }
    if(currmonth>=birthmonth){
        month=currmonth-birthmonth
    }else{
        month=currmonth+12-birthmonth;
        curryear--;
    }
    year=curryear-birthyear
    if(year<0){
        agetext.innerHTML="Please enter correct date"
    }
    else{
        agetext.innerHTML=year+" years "+month+" months "+date+" days "
    }
    
    
    console.log(year+" "+month+" "+year)
}