import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProduct] = useState({});

    const { id: productId } = useParams();

    useEffect(() => {
      const fetchProduct = async () => {
        const {data} = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      };

      fetchProduct();
    }, [productId]);
    
console.log(product)
  return (
    <>
    <Link to='/' className='btn btn-dark p-2 my-3 rounded'>Go Back</Link>
    <Row>
      <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
        
      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>

          <ListGroupItem>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </ListGroupItem>

          <ListGroupItem>Price: ${product.price}</ListGroupItem>

          <ListGroup>Description: {product.description}</ListGroup>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>${product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Button 
              className='btn btn-block' 
              type='button' 
              disabled={product.countInStock === 0 }
              >
                Add To Cart
              </Button> 
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ProductScreen;