import Image from "next/image";
import styles from "@/components/dashboard/events/singleEvent/singleEvent.module.css";
import { getEvent } from "@/lib/data";
import { updateEvent } from "@/lib/actions";

const SingleEventPage = async ({ params }) => {
  const { id } = params;
  const Event = await getEvent(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={Event.img || "/noproduct.png"} alt="EventImage" fill />
        </div>
        {Event.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateEvent} className={styles.form}>
          <input type="hidden" name="id" value={Event.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={Event.title} />
          <label>Location</label>
          <input type="text" placeholder={Event.location} name="location" />
          <label>Organizer</label>
          <input type="text" placeholder={Event.organizer} name="organizer" />
          <label>Date</label>
          <input type="date" name="date" />
          <label>Places</label>
          <input type="number" placeholder={Event.places} name="places" />
          <label>Image URL</label>
          <input type="text" placeholder={Event.img} name="img" />
          
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={Event.description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleEventPage;
