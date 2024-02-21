const start = async () => {
    try {
        // await db(process.env.MONGO_URI)
        await mongoose.connect("mongodb+srv://kchavda2003:krish@943@cluster0.v7sgwea.mongodb.net/?retryWrites=true&w=majority");

        app.listen(PORT, console.log(`server is listening ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
start();
649Oyp1vvcMWRkob