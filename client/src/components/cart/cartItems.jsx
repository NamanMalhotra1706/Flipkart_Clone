import { addEllipsis } from '../util/util';
import { Card, Box, Typography, Button, styled } from '@mui/material';
import ButtonGroup from './ButtonGroup';
import { removeFromCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    background-color:#fff;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem = ({ items }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    return (
        <Component>
            <LeftComponent>
                <img src={items.url} style={{ height: 110, width: 110 }} />
                <ButtonGroup />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(items.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{items.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{items.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{items.price.discount} off</Discount>
                </Typography>
                <Remove onClick={() => removeItemFromCart(items.id)}>Remove</Remove>
            </Box>
        </Component>
        
    )
}

export default CartItem;