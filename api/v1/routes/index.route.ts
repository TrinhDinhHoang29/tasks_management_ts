import taskRoute from "./tasks.route";
export default (app)=>{
    const version:String = "/api/v1"; 
    app.use(`${version}/tasks`,taskRoute);
}