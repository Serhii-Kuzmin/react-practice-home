export const BlogCard = ({
  avatar,
  description,
  name,
  postedAd,
  poster,
  tag,
  title,
}) => {
  return (
    <>
      <div>
        <div>
          <img src={poster} alt="card-image" />
        </div>
        <div>
          <h2>{tag}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <div>
            <img src={avatar} alt={name} />
            <div>
              <p>{name}</p>
              <p>{postedAd}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
