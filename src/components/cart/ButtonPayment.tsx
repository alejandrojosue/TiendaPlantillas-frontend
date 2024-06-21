import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from "../../env/config";
import { loadStripe } from "@stripe/stripe-js";
import PurchaseHistoryRepository from "../../repositories/PurchaseHistoryRepository";
import { getCookie } from "../../util/cookies";
import LinkButton from "../common/LinkButton";
import { IconCreditCardPay } from "../icons/Icons";

const handlePayment = async () => {
 if (!PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  alert('Agregar key pública!')
  return
 }
 const stripe = await loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);
 if (!stripe) {
  alert('No se completo el stripe')
 }

 if (!getCookie("id") || !getCookie("jwt")) {
  location.href = '/login'
  return
 }

 const products = JSON.parse(localStorage.getItem("cart") + '')
 console.log(products.map(({ id }: { id: number }) => ({ id })));

 if (!products || !products.length) {
  alert('El carrito de compras está vacío!')
  location.href = '/templates'
  return
 }

 const purchaseHistoryRepository = new PurchaseHistoryRepository()
 const res = await purchaseHistoryRepository.create({
  token: getCookie("jwt") as string,
  customerId: +(getCookie("id") as string),
  products: products.map(({ id }: { id: number }) => ({ id }))
 })

 if (res instanceof Error) {
  alert(res.message)
  return
 }
 /*
  * {products: [{id}], customer:{id}}
  */
 // await {...} -> retornara un return {stripeSession}
 // sessionId: stripeSession.id
 await stripe?.redirectToCheckout({
  sessionId: res.stripeSession.id
 })
}

export default function ButtonPayment() {
 return (
  <LinkButton size="large">
   <button class="flex gap-x-1 items-center" onClick={handlePayment}>
    <IconCreditCardPay width="30" height="30" />
    Pagar
   </button>
  </LinkButton>
 )
}