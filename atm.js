
//enscapsulation

export class Atm{
    #balance=2000;
    deposit(depAmnt)
    {
        this.#balance=this.#balance+depAmnt
    }
    withdraw(withAmt)
    {
        this.#balance -= withAmt
        console.log("inside withdraw")
    }

checkBalance()
{
    console.log(this.#balance)
    console.log("Inside check balance")

}
}

let atm= new Atm()
atm.checkBalance()
atm.deposit(1000)
atm.checkBalance()
atm.withdraw(500)
atm.checkBalance()