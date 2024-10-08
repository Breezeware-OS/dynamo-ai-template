package net.breezeware.dynamo.ai.dao;

import net.breezeware.dynamo.ai.entity.Model;
import net.breezeware.dynamo.generics.crud.dao.GenericRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ModelRepository extends GenericRepository<Model> {
    Optional<Model> findByUniqueId(UUID uniqueId);
}