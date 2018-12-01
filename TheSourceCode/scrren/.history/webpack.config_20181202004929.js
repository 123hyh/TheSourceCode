import webpack from 'webpack'
export default{
    entry:{
        index:() => import ('./index')
    }
}