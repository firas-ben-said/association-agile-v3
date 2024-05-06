import styles from "@/components/dashboard/events/addEvent/addEvent.module.css";
import { addEvent } from "@/lib/actions";

const AddEvent = () => {
  return (
    <div className={styles.container}>
      <form action={addEvent} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="location" name="location" />
        <input type="text" placeholder="organizer" name="organizer" />
        <input type="date" name="date" />
        <input type="number" placeholder="places" name="places" />
        {/* <input
          type="file"
          id="img_upload"
          name="img"
          accept="image/*"
        /> */}
        <textarea
          name="description"
          id="desc"
          rows="10"
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEvent;
