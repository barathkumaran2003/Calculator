var result = document.querySelector('.result');
let one=null;
let two=null;
let operators=null;
let count='';
let results=null
function change(event) {
    // const count=0;
    count += event.target.textContent
    result.textContent = count;            
   
}
function operator(event)
{
    if(one==null)
{
    one=parseFloat(count);
    operators=event.target.textContent;
    if(operators=='X²')
{
    result.textContent=operators;
    count='';
}
else if(operators=='1/x')
{
    result.textContent=operators;
    count='';
}
else if(operators=='√x')
{
    result.textContent=operators;
    count='';
}
else{
    result.textContent+=operators;
    count='';
}
    console.log(operators);
    count='';
}
}   
function answer(event)
{
    if(one!=null && operators!='')
{
    two=parseFloat(count);

    switch(operators)
    {
        case '+':
            results=one+two;
            break;
        case '-':
            results=one-two;
            break;
            case '*':
            results=one*two;
            break;
            case '/':
            results=one/two;
            break;
            case 'X²':
                results=one*one;
                break;
            case '1/x':
                results=1/one;
                break;
            case '%':
                results=(two/100)*one;
                break;
            case '√x':
                results=Math.sqrt(one);
                break;

    }

}
result.textContent=results;
count=results;
one=null;
}
function deleton(event)
{
    console.log(count);
    result.textContent='';
    count='';   
    console.log(result);
    results=0;
}