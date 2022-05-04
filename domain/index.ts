type Operator = "+" | "*" | "-" | "/"; 

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
      default:
          break;
  }
}

function idk(tab:Array<any>, i:number):Array<any> {
  let tmp = tab.slice(i-2,i)
  tab[i-2] = calculate(Number(tmp[0]), tab[i], Number(tmp[1]))
  tab[i-1] = tab[i] = ""
  console.log(tab.filter(e => e !== ""))
  return tab.filter(e => e !== "")
}

export function polishReverse(text:string):string {
  let tab = text.split("")

  while( tab.findIndex(e => e === "*"  || e === "/" || e === "+" || e === "-") !== -1) {
      let i = tab.findIndex(e => e === "*"  || e === "/" || e === "+" || e === "-")
      tab = idk(tab,i)
  }

  return tab[0]
}
