type Operator = "+" | "*" | "-" | "/" | "N"; 

export function calculateAddition(a:number, b:number):number {
  return a + b
}
export function calculateSoustraction(a:number, b:number):number {
  return a - b
}
export function calculateDivision(a:number, b:number):number {
  return a / b
}
export function calculateMultiplication(a:number, b:number):number {
  return a * b
}
export function calculateNegation(a:number):number {
  return -a
}

export function calculate(a:number, op:Operator, b:number):number {
  switch (op) {
      case "+":
          return calculateAddition(a, b);
      case "*":
          return calculateMultiplication(a, b);
      case "-":
          return calculateSoustraction(a, b);
      case "/":
          return calculateDivision(a, b);
      case "N":
        return calculateNegation(a);
      default:
          break;
  }
}

function idk(tab:Array<any>, i:number):Array<any> {
  if(tab[i] === "N"){
    tab[i-1] = calculate(Number(tab[i-1]),"N",0)
    tab.splice(i,i+5)
  }else{
    let tmp = tab.slice(i-2,i)
    tab[i-2] = calculate(Number(tmp[0]), tab[i], Number(tmp[1]))
    tab[i-1] = tab[i] = ""
    tab.splice(i-1,2)
  }

  return tab
}

export function polishReverse(text:string):string {
  let tab = text.split("")
  
  while( tab.findIndex(e => e === "*"  || e === "/" || e === "+" || e === "-" || e === "N" ) !== -1) {
      let i = tab.findIndex(e => e === "*"  || e === "/" || e === "+" || e === "-" || e === "N")
      tab = idk(tab,i)
  }

  return tab[0]
}
