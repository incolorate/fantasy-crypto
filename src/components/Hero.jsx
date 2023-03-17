import Button from "./Button";

function Hero() {
  return (
    <div className="text-white">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Conquer the crypto trading world
          </h1>
          <p className="text-2xl mb-8">
            Join us now and become a hero of the crypto world! With your courage
            and our expertise, the possibilities are endless. Let the adventure
            begin!
          </p>
          <div className="flex justify-center mx-auto">
            <Button primary={true} rounded>
              Play now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
