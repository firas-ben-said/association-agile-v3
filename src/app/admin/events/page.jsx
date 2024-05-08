import Image from "next/image";
import Link from "next/link";
import styles from "@/components/dashboard/events/events.module.css";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";
import { getEvents } from "@/lib/data";
import { deleteEvent } from "@/lib/actions";

const EventPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const {count, events} = await getEvents(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/admin/events/add">
          <button className={styles.addButton}>Add event</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Location</td>
            <td>Organizer</td>
            <td>Places</td>
            <td>Date</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={event.img || "/noproduct.png"}
                    width={40}
                    height={40}
                    alt="avatar"
                    className={styles.productImage}
                  />
                  {event.title}
                </div>
              </td>
              <td>{event.location}</td>
              <td>{event.organizer}</td>
              <td>{event.places}</td>
              <td>{event.date?.toString().slice(4,16)}</td>
              <td>{event.description}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/events/${event.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteEvent}>
                    <input type="hidden" name="id" value={event.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default EventPage;
