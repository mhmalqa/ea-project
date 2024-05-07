export function SocialMedia({ insta, linktr, x, phone }) {
  return (
    <div className="icons">
      <a href={insta}>
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href={linktr}>
        <i class="fa-brands fa-linkedin-in"></i>
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
