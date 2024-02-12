import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
   return (
      <table className={css.table}>
         <thead>
           <tr className={css.title}>
             <th className={css.titleName}>Type</th>
             <th className={css.titleName}>Amount</th>
             <th className={css.titleName}>Currency</th>
           </tr>
         </thead> 
         <tbody>
            {items.map((item) => (
               <tr key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}