import react from 'react'
const cakes = () => {
    const watchData =[
        { id: 1, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/1.png' },
        { id: 2, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/2.png' },
        { id: 3, name: 'Strawberry', price: 1400, discription: 'Delicious Cake', image: '/3.png' },
        { id: 4, name: 'Mango', price: 1400, discription: 'Delicious Cake', image: '/4.png' },
        { id: 5, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/5.png' },
        { id: 6, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/6.jpg' },
        { id: 7, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/7.png' },
        { id: 8, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/9.png' },
        { id: 9, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/10.png' },
        { id: 10, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/11.jpg' },
    ]
    return(
       <div>
            <div className='cakes'>
                {watchData.map((Cakes) => (
                    <div key ={Cakes.id} className='cake-card'>
                        <img src={Cakes.image} alt={Cakes.name} />
                        <h3>{Cakes.name}</h3>
                        <p>{Cakes.discription}</p>
                        <div className='price'>${Cakes.price}</div>
                            <button>Add to Cart</button>
                    </div>
                ))}
            </div>
       </div>
    )
}

export default cakes