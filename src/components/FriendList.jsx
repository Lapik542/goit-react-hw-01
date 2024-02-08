export const FriendList = ({friends}) => {
   return (
      <ul>
         {friends.map((item, idx) => (
            <li key={idx}>{item}</li>
         ))},
	<li>
		<FriendListItem />
	</li>
</ul>
   )
}