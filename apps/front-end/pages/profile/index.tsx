import { FormEvent, useContext } from 'react';
import UserContext from '../../context/user';

import styles from './profile.module.scss';

const MockPage = () => {
  const { setUserData, userData } = useContext(UserContext);

  const handleLogoutClick = (e: FormEvent) => {
    e.preventDefault();
    setUserData({ newUserData: undefined, updateRoute: true });
  };

  return (
    <section className={styles.container}>
      <h1 className="heading-3">User profile</h1>
      <p className="text">Username: {userData?.username}</p>
      <p className="text margin-bottom-3">segment: {userData?.segment}</p>
      <h2 className="heading-4">Current basket content:</h2>
      {userData?.basket?.lines?.length > 0 ? (
        <ul className="list margin-bottom-3">
          {userData?.basket.lines.map((line) => (
            <li key={line.itemId}>Item id: {line.itemId}</li>
          ))}
        </ul>
      ) : (
        <p className="text margin-bottom-3">Basket is empty</p>
      )}
      <h2 className="heading-4">Past month purchaces:</h2>
      {userData?.pastMonthPurchases?.filter(
        (purchase) => purchase.lines.length > 0
      ).length > 0 ? (
        <ul className="list margin-bottom-3">
          {userData?.pastMonthPurchases?.map((purchase, index) => {
            return (
              <ul className="list" key={`purchase-${index}`}>
                <h3 className="heading-5">
                  {new Date(purchase.createdAt).toLocaleDateString()}
                </h3>
                {purchase.lines.map((line) => (
                  <li key={line.itemId}>ItemId: {line.itemId}</li>
                ))}
              </ul>
            );
          })}
        </ul>
      ) : (
        <p className="text margin-bottom-3">No purchaces</p>
      )}
      <button className="margin-top-3" onClick={handleLogoutClick}>
        Log out
      </button>
    </section>
  );
};

export default MockPage;
