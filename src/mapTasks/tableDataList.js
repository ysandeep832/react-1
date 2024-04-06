


function DisplayTable(prop){

return(

<>

<tr>

    <td>
      {prop.s.id}

    </td>
    <td>
      {prop.s.title}
    </td>
    <td>
      {prop.s.price}
    </td>
    <td>
      {prop.s.description}
    </td>
    <td>
      {prop.s.category}
    </td>
    <td>
      <img src={prop.s.image} alt="imgg"  width={100}/>
    </td>
</tr>



</>

)

}
export default DisplayTable