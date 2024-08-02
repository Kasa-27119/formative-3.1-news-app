import { useContext } from "react"
import {ArticleContext} from "../context/ArticleContext"

export const useArticlesContext = () => {
    const context = useContext(ArticleContext)

    // error prevention
    if (!context) {
        throw Error('useArticlesContext must be inside of the ArticleContext.Provider')
    }
}