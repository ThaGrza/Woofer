import "./Stars.css";

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  let star: string = "★";
  let stars: string[] = [];
  for (let i = 0; i < rating; i++) {
    stars.push(star);
  }
  return <span className="star">{stars}</span>;
};

export default StarRating;
