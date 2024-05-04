
export function SocialMedia({ insta, facebook, x, phone }) {
  return (
    <div className="icons">
      <a href={insta}>
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href={facebook}>
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href={phone}>
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <a href={x}>
        <i class="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  );
}
