import { MainLayout, InputField, AddMoreBtn } from "../Index";

const SocialLinks = () => {
  return (
    <MainLayout
      title="Websites & Social links"
      description="You can add links to websites you want hiring managers to see!. 
      Perhaps it will be a link to your portfolio. Linkedin profile or personal website."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <InputField
          type="text"
          name="label"
          placeholder=""
          onchange={(e) => console.log(e.tagert.value)}
        />
        <InputField
          type="text"
          name="link"
          placeholder=""
          onchange={(e) => console.log(e.tagert.value)}
        />
      </div>
      <AddMoreBtn
        text="Add one more link"
        onclick={() => console.log("Add one more link")}
      />
    </MainLayout>
  );
};

export default SocialLinks;
