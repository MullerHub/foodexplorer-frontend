import { Container } from './style'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'
import { TbPencil } from 'react-icons/tb'
import { Button } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function Card({
  CardId,
  title,
  price,
  img,
  description,
  onFavorite,
  isAdmin,
  ...rest
}) {
  const favorite = false

  const navigate = useNavigate()

  function handlePlate(idCard) {
    navigate(`/plates/${idCard}`)
  }
  function handleFavorite() {}
  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  return (
    <Container {...rest} CardId={CardId}>
      <button className="btn-fav " onClick={handleFavorite}>
        {isAdmin ? (
          <Link onClick={() => handlePlate(CardId)}>
            <TbPencil />
          </Link>
        ) : favorite ? (
          <Link>
            <AiFillHeart />
          </Link>
        ) : (
          <AiOutlineHeart />
        )}
      </button>
      <div className="container">
        <img src={imgPlate} alt="" />
        <h1 className="product-title">{title}</h1>
        <p className="description">{description}</p>
        <h1 className="price-title">R$ {price}</h1>
        <div className="content-includes">
          {isAdmin ? (
            []
          ) : (
            <>
              <button className="btn">
                <AiOutlineMinus />
              </button>
              <span className="count-item">00</span>
              <button className="btn">
                <AiOutlinePlus />
              </button>
              <Button title="incluir"></Button>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
