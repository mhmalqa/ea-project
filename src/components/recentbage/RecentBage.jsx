import Back from "../common/Back";
import Recent from "../home/recent/Recent";
import img from "../images/Real-estate.png";

export function RecentBage({ language }) {
  return (
    <>
      <section className="pricing mb">
        <Back
          name="جميع العقارات"
          title="احصل على عقارك الآن واصنع مستقبلك!"
          cover={img}
        />

        <Recent language={language} isHome={false} />
      </section>
    </>
  );
}
