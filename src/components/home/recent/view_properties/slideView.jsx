import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
  Counter,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

export function ViewImage() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className="recent padding">
        <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button>

        <Lightbox
          plugins={[Captions, Zoom, Fullscreen, Zoom, Download, Thumbnails,Counter]}
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: "https://media.istockphoto.com/id/1469952025/photo/a-business-person-is-working-in-a-cafe-at-night-using-a-tablet-device-and-a-stylus-to-look-up.webp?b=1&s=170667a&w=0&k=20&c=QSMWCuH5Wde2WQM8JJHz6QP2t5DNljUpxZ2J84M37Jg=",
            },
            {
              src: "https://media.istockphoto.com/id/924994456/tr/foto%C4%9Fraf/sokakta-cep-telefonu-kullanan-kad%C4%B1n.jpg?s=2048x2048&w=is&k=20&c=HHc1tTeBHIkH1s4VQAcmplFcCkNdm2_ixLdTxMamdf0=",
            },
            {
              src: "https://media.istockphoto.com/id/1469952025/photo/a-business-person-is-working-in-a-cafe-at-night-using-a-tablet-device-and-a-stylus-to-look-up.webp?b=1&s=170667a&w=0&k=20&c=QSMWCuH5Wde2WQM8JJHz6QP2t5DNljUpxZ2J84M37Jg=",
            },
          ]}
        />
      </section>
    </>
  );
}
