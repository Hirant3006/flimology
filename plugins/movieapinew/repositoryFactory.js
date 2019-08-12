import MovieFactory from './movieRepository';

const repositories = {
    movies : MovieFactory,
};

const RepositoryFactory = {
    get: name => repositories[name]
}

export default RepositoryFactory;