"use client"

import Image from "next/image";
import styles from "./Messages.module.css";
import { useContext } from "react";
import { theme } from "../../../theme/ThemeProvider";

export default function Messages() {
  const {mess,chat,MessageToggle} = useContext(theme); 
  console.log(mess,chat);
  const Message = false;
  const active = false;
  return (
    <div className={styles.Container} style={chat?{right:0}:{right:-500}}>
      <div className={styles.Wrapper}>
        <div className={styles.Contact}>
          <div className={styles.ContactHeader}>contacts</div>
          <ul className={styles.ContactList}>
            <li className={styles.ContactListItem} onClick={()=>{MessageToggle()}}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <div className={styles.unread}>5</div>
                ) : active ? (
                  <div className={styles.active}></div>
                ) : (
                  <div className={styles.justActive}></div>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              {/* Message pending */}
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
              {/* Active */}
              {/* Just Active */}
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.Contact}>
          <div className={styles.ContactHeader}>group</div>
          <ul className={styles.ContactList}>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.Contact}>
          <div className={styles.ContactHeader}>pages</div>
          <ul className={styles.ContactList}>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
            <li className={styles.ContactListItem}>
              <div className={styles.image}>
                <Image src="/images/profile.png" fill />
              </div>
              <div className={styles.name}>Prince Vashisth</div>
              <div className={styles.state}>
                {Message ? (
                  <span className={styles.unread}>5</span>
                ) : active ? (
                  <span className={styles.active}></span>
                ) : (
                  <span className={styles.justActive}></span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
