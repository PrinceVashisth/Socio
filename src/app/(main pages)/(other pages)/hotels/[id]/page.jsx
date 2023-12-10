"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BookmarkBorder, CheckCircle, CreditCardOutlined, RuleRounded, ShareOutlined, Wifi } from "@mui/icons-material";

export default function page() {
  const HandellSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[0].value;
    const message = e.target[0].value;
    console.log({ name, email, message });
  };

  const Stars = ({ props }) => {
    return (
      <div className={styles.Rating}>
        <div className={styles.stars}>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
        </div>
        <h5>{props?.title}</h5>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.Carosol}>
        <div className={styles.Image}>
          <Image src="/images/h-1.jpg" fill />
        </div>
        <div className={styles.Image}>
          <Image src="/images/h-2.jpg" fill />
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.left}>
          <div className={styles.About}>
          <div className={styles.AboutWrapper}>
            <div className={styles.featured}>featured</div>
            <h2>House Party Graynight Mood In Siver Colony, London</h2>
            <p>
              ultrices justo eget, sodales orci. Aliquam egestas libero ac
              turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem
              laoreet, feugiat tellus at, hendrerit arcu.
            </p>
            <div className={styles.reviews}>
              <div className={styles.stars}>
                <div className={styles.star}>
                  <Image src="/images/star.png" fill />
                </div>
                <div className={styles.star}>
                  <Image src="/images/star.png" fill />
                </div>
                <div className={styles.star}>
                  <Image src="/images/star.png" fill />
                </div>
                <div className={styles.star}>
                  <Image src="/images/star.png" fill />
                </div>
                <div className={styles.star}>
                  <Image src="/images/star.png" fill />
                </div>
              </div>
              <span>{" (456 ratings ) "}2 customer review</span>
            </div>
             <div className={styles.Icons}>
                <div className={styles.Icon}>
                   <RuleRounded className={styles.icon}/>
                   <span>200 sq.</span>
                </div>
                <div className={styles.Icon}>
                   <Wifi className={styles.icon}/>
                   <span>wifi</span>
                </div>
                <div className={styles.Icon}>
                   <CreditCardOutlined className={styles.icon}/>
                   <span>card</span>
                </div>
             </div>
             <div className={styles.Btns}>
               <div className={styles.BookBtn}>book now</div>
               <div className={styles.Btn} color=""><ShareOutlined/></div>
               <div className={styles.Btn} bgc><BookmarkBorder/></div>
             </div>
          </div>
          </div>

          <div className={styles.Ameneties}>
            <h2>Ameneties</h2>
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <CheckCircle sx={{color:'#06562f',fontSize:30}} />
                <p>
                  Create awesome animated splash screens for any Excel project
                  such as animation with password access to a work book, loading
                  animation.
                </p>
              </div>
              <div className={styles.ListItem}>
                <CheckCircle sx={{color:'#06562f',fontSize:30}} />
                <p>
                  Create awesome animated splash screens for any Excel project
                  such as animation with password access to a work book, loading
                  animation.
                </p>
              </div>
              <div className={styles.ListItem}>
                <CheckCircle sx={{color:'#06562f',fontSize:30}} />
                <p>
                  Create awesome animated splash screens for any Excel project
                  such as animation with password access to a work book, loading
                  animation.
                </p>
              </div>
              <div className={styles.ListItem}>
                <CheckCircle sx={{color:'#06562f',fontSize:30}} />
                <p>
                  Create awesome animated splash screens for any Excel project
                  such as animation with password access to a work book, loading
                  animation.
                </p>
              </div>
              <div className={styles.ListItem}>
                <CheckCircle sx={{color:'#06562f',fontSize:30}} />
                <p>
                  Create awesome animated splash screens for any Excel project
                  such as animation with password access to a work book, loading
                  animation.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.Description}>
            <h3>Description</h3>
            <p>
              After creating more than a dozen courses on Microsoft Access
              databases and programming in VBA, many students have contacted me
              with discussions on specific problems and scenarios.
            </p>
            <p>
              After creating more than a dozen courses on Microsoft Access
              databases and programming in VBA, many students have contacted me
              with discussions on specific problems and scenarios.
            </p>
            <p>
              After creating more than a dozen courses on Microsoft Access
              databases and programming in VBA, many students have contacted me
              with discussions on specific problems and scenarios.
            </p>
            <p>
              After creating more than a dozen courses on Microsoft Access
              databases and programming in VBA, many students have contacted me
              with discussions on specific problems and scenarios.
            </p>
            <p>
              After creating more than a dozen courses on Microsoft Access
              databases and programming in VBA, many students have contacted me
              with discussions on specific problems and scenarios.
            </p>
            <p>
              After creating more than a dozen courses on Microsoft Access
              databases and programming in VBA, many students have contacted me
              with discussions on specific problems and scenarios.
            </p>
          </div>
          <div className={styles.GalleryContainer}>
            <h2>Gallery</h2>
            <div className={styles.Gallery}>
              <div className={styles.ImageGallery}>
                <Image src="/images/h-1.jpg" fill />
              </div>
              <div className={styles.ImageGallery}>
                <Image src="/images/h-2.jpg" fill />
              </div>
              <div className={styles.ImageGallery}>
                <Image src="/images/h-3.jpg" fill />
              </div>
              <div className={styles.ImageGallery}>
                <Image src="/images/h-4.jpg" fill />
              </div>
              <div className={styles.ImageGallery}>
                <Image src="/images/h-5.jpg" fill />
              </div>
              <div className={styles.ImageGallery}>
                <Image src="/images/h-6.jpg" fill />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.Comments}>
            <div className={styles.ratings}>
              <h1 style={{ fontSize: 45 }}>4.3</h1>
              <p>Based on 433 rating</p>
              <div className={styles.ratingsNums}>
                <Stars props={{ title: "Support" }} />
                <Stars props={{ title: "Clean" }} />
                <Stars props={{ title: "Speed" }} />
                <Stars props={{ title: "Quality" }} />
                <Stars props={{ title: "Delivery" }} />
              </div>
            </div>
            <div className={styles.Views}>
              <div className={styles.View}>
                <div className={styles.profileImg}>
                  <Image src="/images/profile.png" fill />
                </div>
                <div className={styles.content}>
                  <h5>Goria Coast</h5>
                  <span>July 26 at 8:20 PM</span>
                  <Stars />
                  <p>
                    Enjoyed this a lot and well done. We are an early stage
                    digitally native vertical brand, making travel bags.
                  </p>
                </div>
              </div>
              <div className={styles.View}>
                <div className={styles.profileImg}>
                  <Image src="/images/profile.png" fill />
                </div>
                <div className={styles.content}>
                  <h5>Goria Coast</h5>
                  <span>July 26 at 8:20 PM</span>
                  <Stars />
                  <p>
                    Enjoyed this a lot and well done. We are an early stage
                    digitally native vertical brand, making travel bags.
                  </p>
                </div>
              </div>
              <div className={styles.View}>
                <div className={styles.profileImg}>
                  <Image src="/images/profile.png" fill />
                </div>
                <div className={styles.content}>
                  <h5>Goria Coast</h5>
                  <span>July 26 at 8:20 PM</span>
                  <Stars />
                  <p>
                    Enjoyed this a lot and well done. We are an early stage
                    digitally native vertical brand, making travel bags.
                  </p>
                </div>
              </div>
              <div className={styles.View}>
                <div className={styles.profileImg}>
                  <Image src="/images/profile.png" fill />
                </div>
                <div className={styles.content}>
                  <h5>Goria Coast</h5>
                  <span>July 26 at 8:20 PM</span>
                  <Stars />
                  <p>
                    Enjoyed this a lot and well done. We are an early stage
                    digitally native vertical brand, making travel bags.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.AddBtn}>add review</div>
          </div>

          <div className={styles.Form}>
            <h2>Ask a Question</h2>
            <form action="" method="post" onSubmit={HandellSubmit}>
              <input
                type="text"
                className={styles.input}
                placeholder="name"
                required
              />
              <input
                type="email"
                className={styles.input}
                placeholder="email"
                required
              />
              <textarea
                className={styles.inputArea}
                placeholder="Write Your Message .."
                required
              />
              <button type="submit" className={styles.btn}>
                contact us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
