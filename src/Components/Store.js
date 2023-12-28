import Header from './Header';
import CartProvider from './Store/CartProvider';
import Title from './Title';
import List from './List';
import Footer from './Footer';

const Store = (props) => {
  return (
    <CartProvider>
        <Header email={props.email} />
        <Title />
        <List email={props.email} />
        <Footer />
    </CartProvider>
  )
}

export default Store