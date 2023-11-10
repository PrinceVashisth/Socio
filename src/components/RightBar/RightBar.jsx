import Image from "next/image";
import styles from "./rightbar.module.css";
import {
  ArrowBackOutlined,
  ArrowRightAltOutlined,
  Share,
} from "@mui/icons-material";

export default function RightBar() {
  return (
    <div className={styles.container}>
      {/* Friend Request */}
      <div className={styles.FriendRequest}>
        <div className={styles.FriendRequestHeader}>
          <span id={styles.title}>Friend Request</span>
          <span id={styles.btn}>See All</span>
        </div>
        <ul className={styles.friendList}>
          <li className={styles.FriendListItem}>
            <div className={styles.FriendListHeader}>
              <Image
                src="/images/img.png"
                width="50"
                height={50}
                className={styles.FriendListItemImg}
              />
              <div className={styles.FriendListItemContent}>
                <span>John Doe</span>
                <span>25 mutual Friends</span>
              </div>
            </div>
            <div className={styles.FriendListItemBtns}>
              <div className={`${styles.FriendListItemBtn} ${styles.btnAdd}`}>
                confirm
              </div>
              <div
                className={`${styles.FriendListItemBtn} ${styles.btnRemove}`}
              >
                delete
              </div>
            </div>
          </li>
          <li className={styles.FriendListItem}>
            <div className={styles.FriendListHeader}>
              <Image
                src="/images/img.png"
                width="50"
                height={50}
                className={styles.FriendListItemImg}
              />
              <div className={styles.FriendListItemContent}>
                <span>John Doe</span>
                <span>25 mutual Friends</span>
              </div>
            </div>
            <div className={styles.FriendListItemBtns}>
              <div className={`${styles.FriendListItemBtn} ${styles.btnAdd}`}>
                confirm
              </div>
              <div
                className={`${styles.FriendListItemBtn} ${styles.btnRemove}`}
              >
                delete
              </div>
            </div>
          </li>
          <li className={styles.FriendListItem}>
            <div className={styles.FriendListHeader}>
              <Image
                src="/images/img.png"
                width="50"
                height={50}
                className={styles.FriendListItemImg}
              />
              <div className={styles.FriendListItemContent}>
                <span>John Doe</span>
                <span>25 mutual Friends</span>
              </div>
            </div>
            <div className={styles.FriendListItemBtns}>
              <div className={`${styles.FriendListItemBtn} ${styles.btnAdd}`}>
                confirm
              </div>
              <div
                className={`${styles.FriendListItemBtn} ${styles.btnRemove}`}
              >
                delete
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* Confirm friends */}
      <div className={styles.ConfirmFriends}>
        <div className={styles.ConfirmFriendHeader}>
          <span id={styles.title}>Confirm Friend</span>
          <span id={styles.btn}>See All</span>
        </div>
        <ul className={styles.confirmFriendList}>
          <li className={styles.confirmFriendListItem}>
            <Image
              src="/images/img.png"
              width="50"
              height={50}
              className={styles.confirmFriendListItemImg}
            />
            <div className={styles.FriendListItemContent}>
              <span id={styles.owner}>John Doe</span>
              <span id={styles.mutual}>25 mutual Friends</span>
            </div>
            <div className={styles.ConfirmFriendBtn}>
              <ArrowRightAltOutlined />
            </div>
          </li>
          <li className={styles.confirmFriendListItem}>
            <Image
              src="/images/img.png"
              width="50"
              height={50}
              className={styles.confirmFriendListItemImg}
            />
            <div className={styles.FriendListItemContent}>
              <span id={styles.owner}>John Doe</span>
              <span id={styles.mutual}>25 mutual Friends</span>
            </div>
            <div className={styles.ConfirmFriendBtn}>
              <ArrowRightAltOutlined />
            </div>
          </li>
          <li className={styles.confirmFriendListItem}>
            <Image
              src="/images/img.png"
              width="50"
              height={50}
              className={styles.confirmFriendListItemImg}
            />
            <div className={styles.FriendListItemContent}>
              <span id={styles.owner}>John Doe</span>
              <span id={styles.mutual}>25 mutual Friends</span>
            </div>
            <div className={styles.ConfirmFriendBtn}>
              <ArrowRightAltOutlined />
            </div>
          </li>
        </ul>
      </div>
      {/* Suggest Group */}
      <div className={styles.ConfirmFriends}>
        <div className={styles.FriendRequestHeader}>
          <span id={styles.title}>Suggest Group</span>
          <span id={styles.btn}>See All</span>
        </div>
        <Image
          src="/images/nature.jpg"
          width={260}
          height={200}
          style={{ margin: "20px 0px", borderRadius: 20 }}
        />
        <div className={styles.GroupFooter}>
          <div className={styles.imgs}>
            <div className={styles.Img} style={{ left: 0 }}>
              <Image src="/images/img.png" fill />
            </div>
            <div className={styles.Img} style={{ left: 20 }}>
              <Image src="/images/img.png" fill />
            </div>
            <div className={styles.Img} style={{ left: 40 }}>
              <Image src="/images/img.png" fill />
            </div>
            <div className={styles.Img} style={{ left: 60 }}>
              <Image src="/images/img.png" fill />
            </div>
            <div
              className={styles.Img}
              style={{
                left: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              +
            </div>
          </div>
          <div className={styles.GroupFooterContent}>Member apply</div>
        </div>
      </div>
      {/* Suggest Pages */}
      <div className={styles.ConfirmFriends}>
        <div className={styles.FriendRequestHeader}>
          <span id={styles.title}>Suggest Pages</span>
          <span id={styles.btn}>See All</span>
        </div>
        <div className={styles.SuggestContainer}>
          <Image
            src="/images/nature.jpg"
            width={260}
            height={200}
            style={{ margin: "10px 0px", borderRadius: 20 }}
          />
          <div className={styles.LikeBtn}>
            <Share />
            <span>Like Page</span>
          </div>
        </div>
        <div className={styles.SuggestContainer}>
          <Image
            src="/images/nature.jpg"
            width={260}
            height={200}
            style={{ margin: "10px 0px", borderRadius: 20 }}
          />
          <div className={styles.LikeBtn}>
            <Share />
            <span>Like Page</span>
          </div>
        </div>
        <div className={styles.SuggestContainer}>
          <Image
            src="/images/nature.jpg"
            width={260}
            height={200}
            style={{ margin: "10px 0px", borderRadius: 20 }}
          />
          <div className={styles.LikeBtn}>
            <Share />
            <span>Like Page</span>
          </div>
        </div>
      </div>
      {/* Event */}
      <div className={styles.ConfirmFriends}>
        <div className={styles.ConfirmFriendHeader}>
          <span id={styles.title}>Events</span>
          <span id={styles.btn}>See All</span>
        </div>
        <ul className={styles.EventList}>
          <li className={styles.EventListItem}>
            <div className={styles.EventListItemLeft}>
              <span >Feb</span>
              <span >12</span>
            </div>
            <div className={styles.EventListItemRight}>
              <div className={styles.Heading}>Meeting with clients </div>
              <div className={styles.EventContent}>
                41 madison ave, floor 24 new work, NY 10010
              </div>
            </div>
          </li>
          <li className={styles.EventListItem}>
            <div className={styles.EventListItemLeft}>
              <span >Feb</span>
              <span >12</span>
            </div>
            <div className={styles.EventListItemRight}>
              <div className={styles.Heading}>Meeting with clients </div>
              <div className={styles.EventContent}>
                41 madison ave, floor 24 new work, NY 10010
              </div>
            </div>
          </li>
          <li className={styles.EventListItem}>
            <div className={styles.EventListItemLeft}>
              <span >Feb</span>
              <span >12</span>
            </div>
            <div className={styles.EventListItemRight}>
              <div className={styles.Heading}>Meeting with clients </div>
              <div className={styles.EventContent}>
                41 madison ave, floor 24 new work, NY 10010
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
